import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-dark-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Calendar from "primevue/calendar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import InputNumber from "primevue/inputnumber";
import TextArea from "primevue/textarea";
import DynamicDialog from "primevue/dynamicdialog";
import DialogService from "primevue/dialogservice";

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(DialogService);

app.component("DynamicDialog", DynamicDialog);
app.component("TextArea", TextArea);
app.component("InputNumber", InputNumber);
app.component("Tag", Tag);
app.component("Dropdown", Dropdown);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("Row", Row);
app.component("Calendar", Calendar);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Toast", Toast);

app.use(router);
app.mount("#app");
