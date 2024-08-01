const Product1 = () => {
  return (
    <div>
      <h2>Cookies</h2>
      <p>Price: 999 credits</p>
    </div>
  );
};

export default function Product(props) {
  // const price = 999;
  const {
    name = "Without name",
    imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
    price = "Don't fill sheld",
  } = props;
  return (
    // <div>
    //   <h1>Products</h1>

    //   <Product1 />
    //   <Product1 />
    //   <Product1 />
    // </div>
    // <>
    //   <h2>Tacos</h2>
    //   <img
    //     src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
    //     alt="Tacos With Lime"
    //     width="200"
    //   />
    //   <p>Price: 999 credits</p>
    // </>
    // <>
    //   <h2>Tacos</h2>
    //   <img
    //     src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
    //     alt="Tacos With Lime"
    //     width="200"
    //   />
    //   <p>Price: {price} credits</p>
    // </>
    // <div>
    //   <div>
    //     <h2>{props.name}</h2>
    //     <img src={props.imgUrl} alt={props.name} width="480" />
    //     <p>Price: {props.price} credits</p>
    //   </div>
    // </div>
    <div>
      <div>
        <h2>{name}</h2>
        <img src={imgUrl} alt={name} width="200" />
        <del>Price: {price} credits</del>
      </div>
    </div>
  );
}
