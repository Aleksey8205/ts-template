import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly country: string,
        readonly year: number,
        readonly genre: string,
        readonly times: number,
        readonly slogan?: string,
    ) { }
}