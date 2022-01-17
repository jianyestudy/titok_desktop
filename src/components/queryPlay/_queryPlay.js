// @vue/component
import { reactive } from 'vue'
import { ElLoading } from 'element-plus'
import requests from "../../core/http.js";


const queryPlay = reactive({
    cardNumber: 'b49a44dd-c169-4d24-a133-677c9273a5d6',
    uid: '',
})

export const queryPlayApi = (data) => {
    return requests({
        url: "query-play",
        method: "post",
        data
    });
};

const onSubmit = () => {
    const uidArray = queryPlay.uid.split('\n')
    const loadingInstance = ElLoading.service({ fullscreen: true })
    for (let i =0; i <uidArray.length; i++){

        if(uidArray[i].length === 0) continue;

        const requestData = {
            cardNumber: queryPlay.cardNumber,
            uid: uidArray[i]
        }

        queryPlayApi(requestData).then((res) => {
            console.log(res.data)
            //convertUser.uid += res.data + '\n';
        });
    }

    loadingInstance.close()

}

export default {
    name: 'Queryplay',

    components: {},

    mixins: [],

    props: {},

    data () {
        return {queryPlay,onSubmit}
    },

    computed: {},

    watch: {},

    created () {},

    methods: {}
}
