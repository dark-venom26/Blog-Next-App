import Blog from "./components/blog"
import firebase from "./lib/db"

export default function Home() {
  return (
   <section className="flex flex-wrap justify-center">
      <Blog intro="First Blog" title="" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, itaque odio? Facere Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius est commodi laboriosam deserunt, eos officia sed rerum laudantium ipsam obcaecati, veniam, quisquam modi!...."/>
   </section>
  )
}
