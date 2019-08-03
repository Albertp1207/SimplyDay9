export const SWITCH_PAGE = "SWITCH_PAGE";

export const switchPage = pageInfo => ({
    type: SWITCH_PAGE,
    payload: pageInfo
})