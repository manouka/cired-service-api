import { Optional } from "sequelize";

export interface RepositoryInterface {

    create<T>(installation: Optional<Required<T>, keyof T>): Promise<T>;

    update<T>(installation: Optional<Partial<T>, keyof T>): Promise<T>;
}