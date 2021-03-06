/**
 * @fileoverview routes
 * @author: burning <www.cafeinit.com>
 * @version: 2016-10-27
 */

import Index from './pages/index'
import AlertTip from './pages/alertTip'
import Badges from './pages/badges'
import Block from './pages/block'
import Breadcrumb from './pages/breadcrumb'
import Buttons from './pages/buttons'
import Collection from './pages/collection'
import FormView from './pages/form'
import FormList from './pages/formList'
import Grid from './pages/grid'
import Images from './pages/images'
import ImagePicker from './pages/imagePicker'
import List from './pages/list'
import Loading from './pages/loading'
import Modals from './pages/modals'
import Navigation from './pages/navigation'
import Offcanvas from './pages/offcanvas'
import PageDemo from './pages/pageDemo'
import Pagination from './pages/pagination'
import Progress from './pages/progress'
import Rate from './pages/rate'
import ScrollView from './pages/scrollView'
import Steps from './pages/steps'
import SlideView from './pages/slideView'
import Sticky from './pages/sticky'
import Tabs from './pages/tabs'
import Table from './pages/table'
import Toasts from './pages/toasts'
import ToTop from './pages/toTop'
import Videos from './pages/videos'

import FormCheckbox from './pages/form/checkbox'
import FormNumber from './pages/form/number'
import FormRadio from './pages/form/radio'
import FormSelect from './pages/form/select'
import FormSlider from './pages/form/slider'
import FormSwitch from './pages/form/switch'
import FormText from './pages/form/text'
import FormTextarea from './pages/form/textarea'

import DemoScrollList from './pages/demo/scrollList'

export default [
  { path: '/', component: Index },
  { path: '/alert-tip', component: AlertTip },
  { path: '/badges', component: Badges },
  { path: '/block', component: Block },
  { path: '/breadcrumb', component: Breadcrumb },
  { path: '/buttons', component: Buttons },
  { path: '/collection', component: Collection },
  // { path: '/form', component: FormView },
  // { path: '/form-list', component: FormList },
  { path: '/grid', component: Grid },
  { path: '/images', component: Images },
  { path: '/image-picker', component: ImagePicker },
  { path: '/list', component: List },
  { path: '/loading', component: Loading },
  { path: '/modals', component: Modals },
  { path: '/navigation', component: Navigation },
  { path: '/page-demo', component: PageDemo },
  { path: '/pagination', component: Pagination },
  { path: '/progress', component: Progress },
  { path: '/offcanvas', component: Offcanvas },
  { path: '/rate', component: Rate },
  { path: '/scroll-view', component: ScrollView },
  { path: '/slide-view', component: SlideView },
  { path: '/steps', component: Steps },
  { path: '/sticky', component: Sticky },
  { path: '/table', component: Table },
  { path: '/tabs', component: Tabs },
  { path: '/toasts', component: Toasts },
  { path: '/to-top', component: ToTop },
  { path: '/videos', component: Videos },

  { path: '/form/checkbox', component: FormCheckbox },
  { path: '/form/number', component: FormNumber },
  { path: '/form/radio', component: FormRadio },
  { path: '/form/select', component: FormSelect },
  { path: '/form/slider', component: FormSlider },
  { path: '/form/switch', component: FormSwitch },
  { path: '/form/text', component: FormText },
  { path: '/form/textarea', component: FormTextarea },

  { path: '/demo/scroll-list', component: DemoScrollList },

  { name: 'index', path: '/index/:test', component: Index },
]
