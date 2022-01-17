// @vue/component
import { reactive } from 'vue'
import requests from "../../core/http.js";

export const getLoginApi = (params) => {
    return requests({
        url: "covert-user",
        method: "get",
        params: '',    //或者 写成  params，也是可以的
    });
};

const form = reactive({
    cardNumber: '',
    username: '',
    uid: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log("----------");
    getLoginApi('').then((res) => {
        //console.log(res, "----------");
    });
}
export default {
    name: 'Convertuser',

    components: {},

    mixins: [],

    props: {},

    data () {
        return {form,onSubmit}
    },

    computed: {},

    watch: {},

    created () {},

    methods: {}
}
