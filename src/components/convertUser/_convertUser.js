// @vue/component
import { reactive } from 'vue'
import { ElLoading } from 'element-plus'
import requests from "../../core/http.js";

export const covertUser = (data) => {
    return requests({
        url: "convert-user",
        method: "post",
        data
    });
};

const convertUser = reactive({
    cardNumber: 'b49a44dd-c169-4d24-a133-677c9273a5d6',
    username: '',
    uid: '',
})

const onSubmit = () => {
    convertUser.uid = ''
    const usernameArray = convertUser.username.split('\n')
    const loadingInstance = ElLoading.service({ fullscreen: true })
    for (let i =0; i <usernameArray.length; i++){

        if(usernameArray[i].length === 0) continue;

        const requestData = {
            cardNumber: convertUser.cardNumber,
            username: usernameArray[i]
        }

        covertUser(requestData).then((res) => {
            convertUser.uid += res.data + '\n';
        });
    }

    loadingInstance.close()

}
export default {
    name: 'Convertuser',

    components: {},

    mixins: [],

    props: {},

    data () {
        return {convertUser,onSubmit}
    },

    computed: {},

    watch: {},

    created () {},

    methods: {}
}
