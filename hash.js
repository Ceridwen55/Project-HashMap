export function HashMap()
{
    // for generating hash key
    const hash = (key) =>
    {
        let hashCode = 0;

        const mainNumber = 10;

        for ( i = 0; i < key.length; i++)
        {
            hashCode = mainNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    const set = (key, value) =>
    {

    }


    
}