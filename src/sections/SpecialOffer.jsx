import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components/Button";
const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap items-center
    max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <img
          className="object-contain w-full"
          src={offer}
          width={773}
          height={687}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We provide you
          </span>
          <br />
          <span className="text-coral-red">Special</span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Step into style with our latest collection of trendy
          and comfortable shoes! Elevate your footwear game with our special
          offers that bring you the perfect blend of fashion and savings.
         
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Whether you are into sleek sneakers, chic boots, or casual loafers, our
          curated selection has something for every taste. Unleash your inner
          fashionista without breaking the bank!
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="View Details" iconURL={arrowRight} />
          <Button label="Learn more" iconURL={arrowRight} backgroundColor="bg-white" borderColor="border-slate-gray"
          textColor= "text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
