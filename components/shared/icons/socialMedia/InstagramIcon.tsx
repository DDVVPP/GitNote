import { SocialMediaIconType } from "@/types";

const InstagramIcon = ({
  size = 34,
  className = "flex fill-white-500 p-1",
}: SocialMediaIconType) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={className}
    >
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="m16 0c-4.349 0-4.891.021-6.593.093-1.709.084-2.865.349-3.885.745-1.052.412-1.948.959-2.833 1.849-.891.885-1.443 1.781-1.849 2.833-.396 1.02-.661 2.176-.745 3.885-.077 1.703-.093 2.244-.093 6.593s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885.412 1.052.959 1.948 1.849 2.833.885.891 1.781 1.443 2.833 1.849 1.02.391 2.181.661 3.885.745 1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745 1.052-.412 1.948-.959 2.833-1.849.891-.885 1.443-1.776 1.849-2.833.391-1.02.661-2.181.745-3.885.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885-.412-1.052-.959-1.948-1.849-2.833-.885-.891-1.776-1.443-2.833-1.849-1.02-.396-2.181-.661-3.885-.745-1.703-.077-2.244-.093-6.593-.093zm0 2.88c4.271 0 4.781.021 6.469.093 1.557.073 2.405.333 2.968.553.751.291 1.276.635 1.844 1.197.557.557.901 1.088 1.192 1.839.22.563.48 1.411.553 2.968.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968-.303.751-.641 1.276-1.199 1.844-.563.557-1.099.901-1.844 1.192-.556.22-1.416.48-2.979.553-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563-.76-.303-1.281-.641-1.839-1.199-.563-.563-.921-1.099-1.197-1.844-.224-.556-.48-1.416-.563-2.979-.057-1.677-.084-2.197-.084-6.459 0-4.26.027-4.781.084-6.479.083-1.563.339-2.421.563-2.979.276-.761.635-1.281 1.197-1.844.557-.557 1.079-.917 1.839-1.199.563-.219 1.401-.479 2.964-.557 1.697-.061 2.197-.083 6.473-.083zm0 4.907c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zm0 13.546c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333 5.333 2.385 5.333 5.333-2.385 5.333-5.333 5.333zm10.464-13.874c0 1.063-.865 1.921-1.923 1.921-1.063 0-1.921-.859-1.921-1.921 0-1.057.864-1.917 1.921-1.917s1.923.86 1.923 1.917z" />
      </svg>
    </div>
  );
};

export default InstagramIcon;
