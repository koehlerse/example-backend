import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { channel } from "diagnostics_channel";

@Injectable()
export class Testen
{
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async testenMain() 
    {
        
    }
}