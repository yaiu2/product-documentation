import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'gc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    constructor(private clickDetection: MenuService) {}

    public toggleMenu(event: Event): void {
        this.clickDetection.toggleMenu(event);
    }
}
