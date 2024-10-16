export function HashMap()
{   

    let buckets = new Array(100).fill(null);
    

    // for generating hash key
    const hash = (key) =>
    {
        let hashCode = 0;

        const mainNumber = 10;

        for ( let i = 0; i < key.length; i++)
        {
            hashCode = mainNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % buckets.key;
    };


    // for save the hash(key) to an array
    const saveKey = (key,value) =>
    {
        const index = hash(key); //retrieve data from hash(key)

        if(!buckets[index])
        {
            buckets[index] = [];
        }

        for (let i = 0; i < buckets.length; i++ )
        {
            if(buckets[index][i].key === key) // this is using chaining menthod to avoid collision
            {
                buckets[index][i].value = value;
                return;
            }
            
        }

        buckets[index].push({key : key, value : value});
        
    };



    // for update the key value if its the same like the old key to the newest
    const set = (key,value) =>
    {   

        return saveKey (key,value) ;
    
    };

    // for retrieving value with key being inputted
    const get = (key) =>
    {   
        
        const index = hash(key);
        if (!buckets[index])
        {
            return null;
        }

        for(let i = 0; i < buckets[index].length; i++)
        {
            if(buckets[index][i].key === key)
            {
                return buckets[index][i].value
            }
        }

        return null;
        
        
    }

    // for confirming if the buckets has the matched key
    const has = (key) =>
    {
        const had = hash(key);
        if(buckets[had] === key)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    // for removing the key in the buckets, return true if success

    const remove = (key) =>
    {
        const index = hash(key);
        if(!buckets[index])
        {
            return false
        }
        for(let i = 0; i< buckets.length; i++)
        {
            if(buckets[index][i].key === key)
            {
                buckets[index].splice(i,1);
                return true;
            }
        }
    }

    // for counting total length of the keys the code has 
    const length = (index) =>
    {
        if (!buckets[index])
        {
            return 0;
        }
        else
        {
           return buckets[index].length
            
        }
    }

    // for clearing all data inside the index(hash code)
    const clear = (index) =>
    {
        if (!buckets[index])
        {
            return console.log("There is no Index being cleared");
        }
        else
        {
            buckets[index].splice(0,buckets[index].length);
            return 0;
        }

    }
    // for return an array contained inside buckets[index]
    const keys = (index) =>
    {
        if(!buckets[index])
        {
            return [];
        }
        else
        {
            return buckets[index];
        }
    }
    
}