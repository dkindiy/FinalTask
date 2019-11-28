import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { ListComponent } from './list/list.component';

@Injectable()
export class ListFirstGuard {
    private firstNavigation = true;
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != ListComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}