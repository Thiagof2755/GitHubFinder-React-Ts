export type UserProps = {
    avatar_url: string;
    login: string;
    location: string;
    followers: number;
    following: number;
    bio: string;
    name?: string; // Nome do usuário, opcional
    type: string; // Tipo de conta: "User" ou "Organization"
    public_repos: number; // Número de repositórios públicos do usuário
    created_at: string; // Data de criação da conta
    updated_at: string; // Data da última atualização da conta
};
