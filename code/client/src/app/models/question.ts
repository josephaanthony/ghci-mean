import { Option } from './option'

export class Question {
    private _id: String;
    private desc: String;
    private optionType: String;
    private options: [Option]
}