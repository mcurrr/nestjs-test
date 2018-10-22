import { Injectable } from '@nestjs/common';
import { Configuration } from './configuration.enum';
import { config } from 'dotenv';

config();

declare const __DEV__: boolean;

@Injectable()
export class ConfigurationService {
    static connectionString: string = process.env[Configuration.MONGO_URI];

    get(name: string): string {
        return process.env[name];
    }

    get isDev(): boolean {
        return __DEV__;
    }
}
