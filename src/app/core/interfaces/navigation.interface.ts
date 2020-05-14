import { ENavigation } from '../enums/navigation.enums'

export interface INavigation  {
    type: ENavigation.FORUM | ENavigation.POST | ENavigation.THEM;
    value: string;
    url: string;
    stausPost?: boolean;
}