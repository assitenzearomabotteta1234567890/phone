
// Fix: Added React import to resolve 'Cannot find namespace React' error when using React.ReactNode.
import React from 'react';

export interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
  avatar: string;
  verified: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}