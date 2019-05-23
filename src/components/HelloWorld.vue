<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class="texto-justificado">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam nulla fugiat voluptatem aperiam, aliquid hic suscipit voluptates aut porro quaerat sequi dolor! Porro eius ipsam consequuntur architecto tempora, impedit sint quasi sapiente eligendi temporibus soluta delectus nobis obcaecati vitae ratione tempore mollitia. Consequatur, repellat. Corporis quisquam quod vero totam, nemo, quae vel quasi eum adipisci, ut error aliquam accusantium placeat? Placeat rem libero incidunt rerum nam explicabo dolor, illum ab unde accusamus reprehenderit molestias quod ratione sunt vitae maiores dicta consequuntur consectetur suscipit velit voluptatum. Enim reprehenderit, doloribus quos placeat quibusdam possimus cumque! Earum, harum! Nesciunt distinctio autem nobis animi praesentium eveniet modi magni nulla? Natus excepturi illum velit consequatur sapiente alias sed, odio error inventore, cumque at optio consectetur ea culpa dolore sunt eligendi assumenda! Perspiciatis, neque fuga inventore delectus perferendis odit iste quod laborum id, vel ipsam consequuntur quae ducimus? Expedita a velit quidem id adipisci pariatur consequatur fuga unde, doloremque eum praesentium corrupti asperiores? Inventore in earum explicabo laudantium? Sapiente ipsam adipisci corrupti delectus ut facilis temporibus ex fugit praesentium? Obcaecati assumenda quis sunt quos libero sapiente officiis perspiciatis fugit rerum quod neque doloribus nemo consectetur vel ipsam recusandae vitae quam cupiditate numquam voluptate earum, minima nostrum itaque! Ipsum numquam perspiciatis, atque mollitia obcaecati quae, repudiandae, quam quibusdam porro odit modi aliquid ad natus aut recusandae? Eveniet, dolorum commodi possimus velit, quaerat quia incidunt labore ad optio debitis ea quo repudiandae exercitationem rem iure voluptates sunt quod quasi. Quas at velit quam tempore consequatur dolor placeat fuga iusto. Similique accusantium tenetur asperiores voluptas nihil, eius voluptate quam possimus ex eligendi sit ad eos vel ullam corrupti animi qui molestias illo? Possimus quisquam aliquid aut repudiandae libero sint, eius nihil, ex illum illo voluptate placeat sed excepturi non error exercitationem! Repellendus velit a odio esse porro dicta tenetur nulla. Maxime amet illum neque nemo rerum accusantium ex! Perferendis corrupti pariatur ipsam voluptatibus, doloribus illo cum facere. Hic architecto sint, aliquid amet iure placeat consectetur commodi mollitia culpa voluptates sunt magni quisquam velit, voluptatem sapiente illo temporibus distinctio dignissimos earum! Adipisci, placeat modi. Quibusdam nam ea repellendus veritatis dicta distinctio accusamus, libero saepe molestiae quo nulla aut a voluptatibus, blanditiis optio. Cum officiis ipsa nostrum odit et quia. Vel ratione rerum sapiente officia, doloremque iusto quam culpa similique. Laboriosam officiis laudantium odit dolorem quaerat consectetur voluptate reprehenderit cupiditate incidunt doloribus! Repellat incidunt libero ab, totam beatae id tenetur. Atque tempora ipsum labore exercitationem? Rem reprehenderit voluptatem nesciunt rerum velit temporibus libero numquam hic et optio? Quaerat beatae labore tempora? Ab, nam accusamus ut quis cum laborum. Quibusdam omnis veniam modi odit perferendis recusandae in possimus eligendi corrupti ab at distinctio consectetur, animi soluta voluptatibus quasi ad quaerat praesentium. Fugiat aperiam asperiores veniam numquam ut exercitationem consequuntur, nemo nihil beatae a animi quam quisquam placeat vero aliquid perferendis maiores minima, nostrum quos tempore, eveniet libero saepe sed! Veniam modi voluptas fugit repellat tenetur totam! Beatae itaque, possimus quia nemo molestiae maxime eligendi repudiandae voluptates corrupti maiores eum fuga sunt quas reiciendis adipisci officia sit ratione tempore odit incidunt velit perspiciatis? Excepturi.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    padding: 0em 4em;
  }
.texto-justificado {
  text-align: justify;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@media(max-width: 420px){
  .hello{
    padding: 0em 2em;
  }
}
</style>
