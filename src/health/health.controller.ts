import { Controller, Get } from '@nestjs/common';
import { DiskHealthIndicator, HealthCheckService, MemoryHealthIndicator, TypeOrmHealthIndicator } from '@nestjs/terminus';
@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        // private db: TypeOrmHealthIndicator,
        private memory: MemoryHealthIndicator,
        private disk: DiskHealthIndicator,
    ) {
        // console.log(db)
    }


    @Get()
    async check() {
        return this.health.check([
            /* istanbul ignore next */
            // () => this.db.pingCheck('database', { timeout: 300 }),
            /* istanbul ignore next */
            () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
            /* istanbul ignore next */
            () => this.memory.checkRSS('memory_rss', 150 * 1024 * 1024),
            /* istanbul ignore next */
            () =>
                this.disk.checkStorage('storage', { thresholdPercent: 0.8, path: '/' }),
        ]);
    }
}

