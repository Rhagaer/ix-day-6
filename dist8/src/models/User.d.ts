import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    name: string;
    password: string;
    email: string;
    getId(): number | undefined;
}
