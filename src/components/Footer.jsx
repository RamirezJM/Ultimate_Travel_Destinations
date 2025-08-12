export default function Footer(){
  return(
    <footer className="flex flex-col gap-4 items-center
                       p-4 
                       bg-gradient-to-r from-fuchsia-500 to-pink-300 
                       border-t-2 border-red-700">
      <h3 className="text-lg font-medium">Subscribe</h3>
      <p>Want to get notified with new destinations? Sign up for the newsletter and never miss out!</p>
      <form className="flex gap-4">
      <input type="text" className="w-3/4 border-red-500 rounded-sm bg-[#f7edd2]"/>
      <input type="submit" value='Sign up' className="p-2 text-white font-medium rounded-sm bg-red-500"/>
      </form>
    </footer>
  )
}