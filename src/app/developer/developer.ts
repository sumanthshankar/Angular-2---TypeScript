import { Language } from './language';

export class Developer {
    constructor(public firstName: string, public lastName: string,
        public email: string, public githubAccount: string,
        public popularity: string, public langauges: Language[]) { }
}