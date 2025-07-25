import { IsInt, IsOptional, IsString, IsUrl, Length, Min } from "class-validator";

export class CrearEditarBaseDto{
    @Length(3, 500)
    nombre: string;

    @IsInt()
    @Min(0)
    valor: number;

    @IsUrl()
    imagenURL: string;

    @IsOptional()
    @IsString()
    username: string;

    @IsOptional()
    @IsString()
    password: string;
}