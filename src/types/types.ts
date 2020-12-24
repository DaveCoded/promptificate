export type Mode = 'classic' | 'advanced' | 'freestyle';

export type FixedPrompt = {
    category: string;
    result: string;
}

export type FreestylePrompt = {
    category: string;
    result: string;
    isLocked: boolean;
    error?: string;
}
