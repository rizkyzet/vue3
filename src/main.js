
import {
    createApp
} from 'vue'
import App from './App.vue'
import LifeCycle from './LifeCycle.vue'
import VOnce from "./VOnce.vue";
import VHtml from "./VHtml.vue";
import Computed from "./Computed.vue";
import GetterSetter from "./GetterSetter.vue";
import Watcher from "./Watcher.vue";
import Dynamic from "./Dynamic.vue";
import Refs from "./Refs.vue";
import UpdateParent from "./UpdateParent.vue";
import UpdateParent2 from "./UpdateParent2.vue";
import Slot from "./Slot.vue";
import NamedSlot from "./NamedSlot.vue";
import PropsSlot from "./PropsSlot.vue";
import Global from "./Global.vue";
import Types from "./Types.vue";
import Alive from "./Alive.vue";
import Mixins from "./Mixins.vue";
import Teleport from "./Teleport.vue";

import ChildComponent from "./components/ChildComponentGlobal.vue";


const app = createApp(Teleport)
app.component("child-component",ChildComponent);

app.mount("#app")