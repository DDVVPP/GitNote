import { TechIconType } from "@/types";

const StyledComponentsIcon = ({
  size = 6,
  background = true,
}: TechIconType) => {
  const backgroundStyle = background && "bg-black-700 rounded border-none";

  return (
    <div className={`${backgroundStyle} h-${size} w-${size} p-1`}>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m18.05 29.6c.042-.095.148-.161.225-.241 1.175-1.232 2.36-2.453 3.519-3.7a3.2 3.2 0 0 0 1.014-2.659 5.925 5.925 0 0 0 -.143-.624c-.316.3-.61.573-.906.848-.46.428-.918.858-1.382 1.281a1.931 1.931 0 0 1 -2.148.419 1.973 1.973 0 0 1 -1.29-1.75 1.04 1.04 0 0 0 -.043-.146c-.353.3-.691.576-1.026.86l-6.963 5.9c-.048.041-.1.092-.145.132h9.283l-.014-.009c-.05-.035-.024-.219.019-.311z"
          fill="#ffcebf"
        />
        <path
          d="m8.337 29.6a1.239 1.239 0 0 1 .295-.276l9.636-8.175q.986-.837 1.963-1.683a.523.523 0 0 0 .182-.224 5.364 5.364 0 0 0 .065-2.069c-.1.07-.154.1-.2.149-.789.706-1.574 1.418-2.367 2.12a1.762 1.762 0 0 1 -2.048.329 1.889 1.889 0 0 1 -1.08-1.807c0-.085 0-.169 0-.324-.145.106-.251.177-.35.257q-5.785 4.632-11.568 9.257c-.174.139-.382.449-.61.148s.119-.425.294-.565q6.165-4.947 12.336-9.885c.67-.537.714-.762.278-1.615l-.26.244c-.713.663-1.434 1.317-2.136 1.991a2.121 2.121 0 0 1 -3.585-1.337c-.133.1-.248.173-.357.258l-6.1 4.728a1.485 1.485 0 0 1 -.356.258.446.446 0 0 1 -.3-.015v8.561h6.256a.365.365 0 0 1 .012-.325z"
          fill="#ffcebf"
        />
        <path
          d="m25.237 2.423c-.17.557-.335 1.115-.484 1.678a1.688 1.688 0 0 0 .9 2.09 7.122 7.122 0 0 0 3.818.8v-4.473a.73.73 0 0 1 .016-.294.666.666 0 0 1 .105-.149h-4.359c.067.078.044.215.004.348z"
          fill="#ff6196"
        />
        <g fill="#ff87af">
          <path d="m16.482 12.032a2.422 2.422 0 0 1 -.5 1.376 22.671 22.671 0 0 1 -3.726 3.792 1.442 1.442 0 0 1 -1.684.2 1.393 1.393 0 0 1 -.843-1.368 1.624 1.624 0 0 1 .417-.947 35.848 35.848 0 0 1 5.019-3.993.71.71 0 0 1 .829-.034 1.041 1.041 0 0 1 .488.974z" />
          <path d="m15.284 18.093a1.437 1.437 0 0 1 .448-1.2 38.336 38.336 0 0 1 4.87-3.813c.052-.033.1-.066.157-.1a.837.837 0 0 1 1.025.035.861.861 0 0 1 .242.979 4.39 4.39 0 0 1 -1.168 1.908c-1.105 1.1-2.252 2.164-3.4 3.22a1.124 1.124 0 0 1 -1.364.192 1.512 1.512 0 0 1 -.81-1.221z" />
          <path d="m22.5 18.754c-.28.3-.568.586-.837.893a1.89 1.89 0 0 0 -.2.38c.148.044.321.16.441.119.611-.205 1.207-.451 1.878-.71-.146.336-.256.646-.411.93a12.189 12.189 0 0 1 -2.371 2.872q-.532.513-1.105.981a1.484 1.484 0 0 1 -2.415-.92 1.1 1.1 0 0 1 .238-.813 22.187 22.187 0 0 1 4.623-3.823.193.193 0 0 1 .065-.013z" />
        </g>
        <path
          d="m24.794 14.771 1.711-7.6 1.2.281-.619 1.881c-.578 1.75-1.163 3.5-1.727 5.252-.11.324-.254.384-.565.186z"
          fill="#ff6196"
        />
        <path
          d="m22.862 19.241c.181-.691.361-1.33.513-1.976a4.468 4.468 0 0 1 .826-1.721c.243-.319.516-.192.795-.123.258.063.323.252.334.5a2.845 2.845 0 0 1 -.588 1.907 4.8 4.8 0 0 1 -1.88 1.413z"
          fill="#ff6196"
        />
        <path d="m29.993 2.894a3.623 3.623 0 0 0 -.017-.668.291.291 0 0 0 -.116-.151.381.381 0 0 0 -.152-.075c-.032-.006-.077.027-.12.074a.666.666 0 0 0 -.105.149.73.73 0 0 0 -.016.294v4.472a7.122 7.122 0 0 1 -3.818-.8 1.688 1.688 0 0 1 -.9-2.09c.149-.563.314-1.121.484-1.678.04-.133.063-.27 0-.348a.2.2 0 0 0 -.135-.064.3.3 0 0 0 -.182.064.434.434 0 0 0 -.171.19c-.2.6-.376 1.206-.529 1.818a2.148 2.148 0 0 0 -.046.737 2.339 2.339 0 0 0 1.542 2c.189.079.3.157.247.406-.073.316-.144.632-.216.949q-.735 3.222-1.462 6.447a.483.483 0 0 1 -.121.257 3.228 3.228 0 0 0 -.791.92 4.8 4.8 0 0 0 -.53 1.5.981.981 0 0 1 -.558.785c-.417.211-.8.484-1.263.768a12.639 12.639 0 0 0 -.018-1.671 1.062 1.062 0 0 1 .284-.96 4.75 4.75 0 0 0 1.258-2.194 1.294 1.294 0 0 0 -1.208-1.7 1.7 1.7 0 0 0 -.929.264c-.957.646-1.888 1.332-2.812 2.026-.547.412-1.062.868-1.592 1.3a.418.418 0 0 1 -.059-.081.842.842 0 0 0 -.059-.214c-.443-.684-.136-1.181.345-1.692a2.793 2.793 0 0 0 .772-1.951 1.568 1.568 0 0 0 -.327-1.026 1.459 1.459 0 0 0 -.438-.363 1.337 1.337 0 0 0 -1.517.162l-.279.2c-.637.456-1.282.9-1.895 1.388-.895.712-1.769 1.454-2.626 2.214-.4.353-.692.835-1.107 1.163-2.164 1.709-4.351 3.387-6.53 5.076a1.022 1.022 0 0 0 -.205.161.164.164 0 0 0 -.016.029c-.046.107-.085.284-.031.349a.141.141 0 0 0 .047.033.446.446 0 0 0 .3.015 1.485 1.485 0 0 0 .356-.258l6.1-4.728c.109-.085.224-.162.357-.258a2.121 2.121 0 0 0 3.585 1.337c.7-.674 1.423-1.328 2.136-1.991l.26-.244c.436.853.392 1.078-.278 1.615q-6.176 4.942-12.343 9.886c-.175.14-.521.267-.294.565s.436-.009.61-.148q5.786-4.621 11.564-9.254c.1-.08.205-.151.35-.257v.324a1.889 1.889 0 0 0 1.08 1.807 1.762 1.762 0 0 0 2.048-.329c.793-.7 1.578-1.414 2.367-2.12.05-.045.108-.079.2-.149a5.364 5.364 0 0 1 -.065 2.069.523.523 0 0 1 -.182.224q-.978.845-1.963 1.683l-9.632 8.176a1.239 1.239 0 0 0 -.295.276.365.365 0 0 0 -.012.321.376.376 0 0 0 .32.063.294.294 0 0 0 .116-.065c.05-.04.1-.091.145-.132l6.963-5.9c.335-.284.673-.564 1.026-.86a1.04 1.04 0 0 1 .043.146 1.973 1.973 0 0 0 1.29 1.75 1.931 1.931 0 0 0 2.148-.419c.464-.423.922-.853 1.382-1.281.3-.275.59-.551.906-.848a5.925 5.925 0 0 1 .143.624 3.2 3.2 0 0 1 -1.014 2.649c-1.159 1.248-2.344 2.469-3.519 3.7-.077.08-.183.146-.225.241s-.069.281-.019.321l.014.009a.573.573 0 0 0 .338.051.136.136 0 0 0 .081-.051c.028-.029.055-.065.082-.092.952-.984 1.909-1.963 2.854-2.954a13.982 13.982 0 0 0 1.074-1.223 3.411 3.411 0 0 0 .61-3.616.516.516 0 0 1 .074-.386c.065-.112.137-.221.211-.329a4.632 4.632 0 0 0 .587-1 7.547 7.547 0 0 1 1.339-2.4 2.792 2.792 0 0 0 .5-2.469.988.988 0 0 1 0-.489c.506-1.567 1.027-3.129 1.543-4.692q.347-1.05.69-2.094l.213-.647c.454 0 .882-.009 1.308 0 .354.01.462-.156.458-.5-.021-1.38-.013-2.759-.013-4.138zm-17.737 14.306a1.442 1.442 0 0 1 -1.684.2 1.393 1.393 0 0 1 -.843-1.368 1.624 1.624 0 0 1 .417-.947 35.848 35.848 0 0 1 5.019-3.993.852.852 0 0 1 .326-.14.656.656 0 0 1 .238 0 .763.763 0 0 1 .265.106 1.041 1.041 0 0 1 .488.975 2.422 2.422 0 0 1 -.5 1.376 22.671 22.671 0 0 1 -3.726 3.791zm5.2 1.929a1.124 1.124 0 0 1 -1.364.192 1.512 1.512 0 0 1 -.81-1.224 1.437 1.437 0 0 1 .448-1.2 38.336 38.336 0 0 1 4.87-3.813c.052-.033.1-.066.157-.1a.837.837 0 0 1 1.025.035.861.861 0 0 1 .242.979 4.39 4.39 0 0 1 -1.168 1.908c-1.103 1.102-2.25 2.163-3.398 3.219zm5.911 1.241a12.189 12.189 0 0 1 -2.367 2.868q-.532.513-1.105.981a1.484 1.484 0 0 1 -2.415-.92 1.1 1.1 0 0 1 .238-.813 22.187 22.187 0 0 1 4.623-3.823.193.193 0 0 1 .065-.013l.1.1c-.28.3-.568.586-.837.893a1.89 1.89 0 0 0 -.2.38c.148.044.321.16.441.119.483-.162.958-.35 1.467-.55l.411-.16c-.154.34-.264.65-.419.934zm1.373-2.535a4.363 4.363 0 0 1 -1.373 1.152q-.247.138-.507.258c.178-.681.356-1.312.507-1.95l.006-.026a4.468 4.468 0 0 1 .826-1.721c.243-.319.516-.192.795-.123.258.063.323.252.334.5a2.845 2.845 0 0 1 -.586 1.906zm2.34-8.5c-.578 1.75-1.163 3.5-1.727 5.252-.106.329-.25.389-.561.191l1.483-6.593.228-1.012 1.2.281c-.082.247-.161.49-.241.731z" />
      </svg>
    </div>
  );
};

export default StyledComponentsIcon;
