export interface ErrorRetorno {
   error: string;
   message: string | string[]; // string[] is used for validation errors
   statusCode: number;
}
