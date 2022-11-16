<template lang="pug">
transition(name="fade")
    .card.mx-0.px-0
        .card-header.bg-success
            .row
                .col-2
                .col-8
                    router-link(:to="localLink" v-if="localLink")
                        h4 {{title}}
                    a(:href="link" v-else-if="link")
                        h4 {{title}}
                    h4(v-else) {{title}}
                .col-2.align-right.text-white.px-0
                    b-button.m-1(:variant="variant"
                        :class="visible ? null : 'collapsed'"
                        :aria-expanded="visible ? 'true' : 'false'"
                        :aria-controls="'collapse-'+id"
                        @click="visible = !visible") 
                            i.fa.fa-chevron-up(v-if="visible") 
                            i.fa.fa-chevron-down(v-else)
        .card-body.m-0.p-0
            b-collapse(:id="'collapse-'+id" v-model="visible" )
                slot
</template>
    
<script>
export default {
    props: {
        id: {
            type: String,
            default: '1'
        },
        isOpen: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        variant: {
            type: String,
            default: 'success'
        },
        link: {
            type: String,
            default: null
        },
        localLink: {
            type: String,
            default: null
        },
    },
    mounted() { 
        this.visible = this.isOpen;
    },
    data() {
        return {
            visible: false, 
        };
    },
};
</script>
    
    
<style scoped>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
    display: none;
}

.card {
    margin-top: 10px;
}

.p {
    text-indent: 2em;
}
</style>