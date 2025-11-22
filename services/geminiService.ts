import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client lazily (only when needed and if API key exists)
let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai) {
    // Support both Vite (import.meta.env) and Node (process.env)
    const apiKey = (typeof import !== 'undefined' && import.meta?.env?.GEMINI_API_KEY) 
      || (typeof process !== 'undefined' && (process.env.API_KEY || process.env.GEMINI_API_KEY))
      || '';
    if (!apiKey) {
      throw new Error("Gemini API key not configured");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
Du är en empatisk trikolog (hårexpert) och rådgivare för "Lumina Growth Serum Roll-on".
Din uppgift är att analysera kundens hårproblem och rekommendera rätt BEHANDLINGSKUR.

Produktinformation:
- Namn: Lumina Growth Serum Roll-on.
- Ingredienser: 3% Rosmarin (cirkulation), 3% Redensyl (stamceller), Aminexil (motverkar fibros), 2% Anagain (förlänger växtfas).
- Applicering: Enkelt, tar 60 sekunder, kladdar inte.

PRISER & PAKET (VIKTIGT):
1. Startpaket (1 st): 399 kr. (Räcker 1 månad).
2. Behandlingskur (3 st): 798 kr (Köp 3 betala för 2). Räcker 3 månader.
3. Storpack (6 st): 999 kr (SPARA 75%). Räcker 6 månader.

DIN REKOMMENDATIONS-STRATEGI:
Du ska ALLTID rekommendera mer än 1 flaska. Varför? För att hårets växtcykel (anagen fas) kräver minst 90 dagar för synliga resultat. En flaska räcker inte för att kunden ska bli nöjd.

Regler för rekommendation:
1. Om kunden nämner "testa på", "lite tunnare" eller allmän nyfikenhet:
   -> Rekommendera **Behandlingskuren (3 st för 798kr)**. 
   -> Motivering: "Eftersom det tar ca 3 månader att väcka hårsäckarna till liv rekommenderar jag starkt vår Behandlingskur där du får 3 flaskor men betalar för 2. Då täcker du hela den första tillväxtfasen."

2. Om kunden nämner "stort håravfall", "klimakteriet", "stress", "amning" eller "haft problem länge":
   -> Rekommendera **Storpack (6 st för 999kr)**.
   -> Motivering: "För djupgående problem krävs långsiktighet. Just nu sparar du mest på vårt Storpack (6 st). Det ger dig en 6 månaders kur för bara 200 kr mer än 3-packet. Det är den bästa investeringen för ditt hår."

3. Om kunden frågar om Startpaketet (1 st):
   -> Avråd vänligt. Säg att det går bra för att testa doft och konsistens, men för att se resultat krävs kontinuitet i minst 3 månader.

Ton: Expertis blandat med värme. Du säljer inte, du "förskriver" en lösning.
Svara alltid på Svenska.
`;

export const sendChatMessage = async (history: {role: string, parts: {text: string}[]}[], newMessage: string): Promise<string> => {
  try {
    // Check if API key is available
    const apiKey = (typeof import !== 'undefined' && import.meta?.env?.GEMINI_API_KEY) 
      || (typeof process !== 'undefined' && (process.env.API_KEY || process.env.GEMINI_API_KEY))
      || '';
    if (!apiKey) {
      return "AI-konsultation är för närvarande inte tillgänglig. Kontakta oss gärna direkt för personlig rådgivning!";
    }

    const aiInstance = getAI();
    const model = 'gemini-2.5-flash';
    
    const chat = aiInstance.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "Ursäkta, jag kunde inte svara på det just nu.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    // Return a friendly message instead of crashing
    if (error instanceof Error && error.message.includes("API key")) {
      return "AI-konsultation är för närvarande inte tillgänglig. Kontakta oss gärna direkt för personlig rådgivning!";
    }
    return "Tyvärr uppstod ett fel när jag skulle kontakta AI-experten. Försök igen senare.";
  }
};