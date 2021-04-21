import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";

export { SettingsRepository }

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {

}

