export interface FileData {
    name: string;
    size: number;
    type: string;
    content?: string;
}

export interface TextData {
    content: string;
    timestamp: Date;
}