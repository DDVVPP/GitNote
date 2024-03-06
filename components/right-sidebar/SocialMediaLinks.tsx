import Image from "next/image";
import github from '@/public/socials/github.svg'
import linkedin from '@/public/socials/linkedin.svg'
import twitter from '@/public/socials/twitter.svg'
import instagram from '@/public/socials/instagram.svg'
import facebook from '@/public/socials/facebook.svg'
import dribble from '@/public/socials/dribbble.svg'

const SocialMediaLinks = () => {
  return (<>
    <div className='flex gap-2'>
      <Image
        src={github}
        alt={`@nikkyeva Icon`}
      />
      <p className='text-white-300 paragraph-2-regular inline-block'>
        @nikkyeva
      </p>
    </div>
    <div className='flex gap-2'>
      <Image
        src={linkedin}
        alt={`@nikkyeva Icon`}
      />
      <p className='text-white-300 paragraph-2-regular inline-block'>
        @nikkyeva
      </p>
    </div>
    <div className='flex gap-2'>
      <Image
        src={twitter}
        alt={`@nikkyyy Icon`}
      />
      <p className='text-white-300 paragraph-2-regular inline-block'>
        @nikkyyy
      </p>
    </div>
    <div className='flex gap-2'>
      <Image
        src={instagram}
        alt={`@nikkydeveloper Icon`}
      />
      <p className='text-white-300 paragraph-2-regular inline-block'>
        @nikkydeveloper
      </p>
    </div>
    <div className='flex gap-2'>
      <Image
        src={facebook}
        alt={`@nikkyevva Icon`}
      />
      <p className='text-white-300 paragraph-2-regular inline-block'>
        @nikkyevva
      </p>
    </div>
    <div className='flex gap-2'>
      <Image
        src={dribble}
        alt={`@nikkydev Icon`}
      />
      <p className='text-white-300 paragraph-2-regular inline-block'>
        @nikkydev
      </p>
    </div>
  </>
  )
}

export default SocialMediaLinks;
