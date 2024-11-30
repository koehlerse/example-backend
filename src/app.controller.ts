import { Controller, Get } from "@nestjs/common";
import { BrandsService } from "./app.service";

@Controller('brands')
export class BrandsController {
    constructor(private readonly brandService: BrandsService) {}
}