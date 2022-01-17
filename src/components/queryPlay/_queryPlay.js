// @vue/component
import { reactive } from 'vue'
import { ArrowLeft, VideoPlay } from '@element-plus/icons-vue'

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}

export default {
    name: 'Queryplay',

    components: {},

    mixins: [],

    props: {},

    data () {
        return {form}
    },

    computed: {},

    watch: {},

    created () {},

    methods: {}
}
