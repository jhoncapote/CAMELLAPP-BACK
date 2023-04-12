import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import PublicarOferta from 'src/pages/PublicarOferta.vue'
import OfertasEmpleo from 'src/pages/OfertasEmpleo.vue'
import DetalleOferta from 'src/pages/DetalleOferta.vue'
import Experiencia from 'src/pages/Experiencia.vue'
import VerExperiencia from 'src/pages/VerExperiencia.vue'
import Upgrade from 'src/pages/Upgrade.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'PublicarOferta',
        name: 'PublicarOferta',
        component: PublicarOferta
      },
      {
        path: 'OfertasEmpleo',
        name: 'OfertasEmpleo',
        component: OfertasEmpleo
      },
      {
        path: 'DetalleOferta',
        name: 'DetalleOferta',
        component: DetalleOferta
      },
      {
        path: 'Experiencia',
        name: 'Experiencia',
        component: Experiencia
      },
      {
        path: 'VerExperiencia',
        name: 'VerExperiencia',
        component: VerExperiencia
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
