export interface IApiScheme {
    title: string;
    bodyText: string;
}

export interface IApiResponse {
    Pages: Array<IApiScheme>
}
