let [activeIndex, setActiveIndex] = useState(0);
const [clicked, setClicked] = useState(false);
//function that translates the carosel right by 100vw, thus presenting a new item
const caroselRight = () => {
  //sets a bool which confirms that the carosel is active, will enable css class which adds transition
  setClicked(true);
  //if the active index value is less than the index of the last item in the arr increment
  if (activeIndex < child.length - 1) {
    setActiveIndex(++activeIndex);
  } else {
    //if we've reached the end, or last element then reset, and set active index and remove css clase by removing the transition.
    setActiveIndex(0);
    return setClicked(false);
  }
};

const caroselLeft = () =>
  clicked && activeIndex !== 0
    ? setActiveIndex(--activeIndex)
    : setClicked(false);
//use the useSwipeable library to create methods to handle right and left swipes on mobile
const handlers = useSwipeable({
  onSwipedRight: () => caroselRight(),
  onSwipedLeft: () => caroselLeft(),
});
//style variable which will be applied if the clicked bool is true, will translate to -100% in normal circumstances meaning that 1st el will be shown
const style = { transform: `translateX(-${(activeIndex - 1) * 100}%)` };

<section className="py-5 h-screen min-h-screen flex flex-col justify-center items-center">
  <h2 className="my-5 py-5 text-5xl">Top Picks</h2>
  <section className="flex flex-row justify-around px-2">
    {shirtArr.map((shirt) => {
      return (
        <figure className="w-2/3 h-1/2 lg:h-4/5 lg:w-1/5 card glass flex flex-col justify-start items-center ">
          <section className="h-2/3 w-full lg:flex lg:justify-center ">
            <img
              className="h-full w-full lg:h-full lg:w-full"
              src={shirt.img}
              alt="shirt"
            />
          </section>
          <section className="bg-gray-400 h-full w-full">
            <h5 className="py-1 mt-1 text-lg font-bold text-center text-white">
              {shirt.title}
            </h5>
            <p className="px-4 text-center text-white">{shirt.description}</p>
          </section>
        </figure>
      );
    })}
  </section>
</section>;
