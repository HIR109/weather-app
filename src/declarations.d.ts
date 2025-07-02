declare module '*.png' {
    const value: string;
    export default value;
}

interface ImportMetaEnv {
    readonly VITE_APP_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}