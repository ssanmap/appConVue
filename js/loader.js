let loader = Vue.component("loader", {
	template: `
    <div class="vh-100 d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex align-items-center flex-column">
            <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <p>loading data</p>
    </div>`,
});

export default loader;
