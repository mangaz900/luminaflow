import React, { ReactNode } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}