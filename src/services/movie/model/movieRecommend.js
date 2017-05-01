export default class MovieRecommend {
    tvTitle
    iconaddress
    iconlinkUrl
    m_iconlinkUrl
    subHead
    grade
    gradeNum
    playDate = {
        showname: '',
        data: '',
        data2: ''
    }

    director = {
        showname: '',
        data: {}
    }

    star = {
        showname: '',
        data: {}
    }

    type = {
        showname: '',
        data: {}
    }

    story = {
        showname: '',
        data: {
            storyBrief: '',
            storyMoreLink: ''
        }
    }

    more = {
        showname: '',
        data: [],
    }
}