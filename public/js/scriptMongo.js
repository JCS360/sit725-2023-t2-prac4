const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.businesssuburb+' '+item.businessstate+'<i class="material-icons right">more_vert</i></span><p><a href="#"></a></p></div>'+
                '<p class="card-text">'+item.chargertypes+'</p>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.businessname+'<i class="material-icons right">close</i></span>'+
                '<p class="card-text">'+item.businesssuburb+' '+item.businessstate+'</p>'+
                '<p class="card-text">'+item.chargertypes+'</p>'+
                '<p class="card-text">'+item.additionalservices+'</p>'+
                '<p class="card-text">'+item.localityamenities+'</p>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

const formSubmitted = () => {
    let formData = {};
    formData.businessname = $('#businessname').val();
    formData.businesssuburb = $('#businesssuburb').val();
    formData.businessstate = $('#businessstate').val();
    formData.path = $('#path').val();
    formData.chargertypes = $('#chargertypes').val();
    formData.additionalservices = $('#additionalservices').val();
    formData.localityamenities = $('#localityamenities').val();

    console.log(formData);
    postCat(formData);
}

function postCat(cat){
    $.ajax({
        url:'/api/cat',
        type:'POST',
        data:cat,
        success: (result)=>{
            if (result.statusCode === 201) {
                alert('cat post successful');
            }
        }
    });
}

function getAllCats(){
    $.get('/api/cats', (response)=>{
        // response's data is in array format, so we can use it
        if (response.statusCode === 200) {
            addCards(response.data);
        }
    });
}

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSubmitted();
    });
    $('.modal').modal();
    getAllCats();
});