var vanillaModal,vanillaModalsmright,vanillaModalscr;document.addEventListener("DOMContentLoaded",function(){var l=document.getElementsByClassName("modal"),a=document.getElementsByClassName("modalsmright"),o=document.getElementsByClassName("modalscr");0<l.length&&(vanillaModal=new VanillaModal.default({modal:".modal",modalInner:".modal-inner",modalContent:".modal-content",open:"[data-modal-open]",close:"[data-modal-close]",page:"body",loadClass:"vanilla-modal",class:"modal-visible",clickOutside:!0,closeKeys:[27],transitions:!0,onBeforeOpen:null,onBeforeClose:null})),0<a.length&&(vanillaModalsmright=new VanillaModal.default({modal:".modalsmright",modalInner:".modalsmright-inner",modalContent:".modalsmright-content",open:"[data-modalsmright-open]",close:"[data-modalsmright-close]",page:"body",loadClass:"vanilla-modal",class:"modalsmright-visible",clickOutside:!0,closeKeys:[27],transitions:!0,onBeforeOpen:null,onBeforeClose:null})),0<o.length&&(vanillaModalscr=new VanillaModal.default({modal:".modalscr",modalInner:".modalscr-inner",modalContent:".modalscr-content",open:"[data-modalscr-open]",close:"[data-modalscr-close]",page:"body",loadClass:"vanilla-modal",class:"modalscr-visible",clickOutside:!0,closeKeys:[27],transitions:!0,onBeforeOpen:null,onBeforeClose:null}))});