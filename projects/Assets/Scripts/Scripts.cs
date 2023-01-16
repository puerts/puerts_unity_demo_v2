using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scripts : MonoBehaviour
{
    public static int IntArgAndReturnInt(int a)
    {
        return a;
    }
    public static int IntArgAndReturnIntWithOverload(int a)
    {
        return a;
    }
    public static int IntArgAndReturnIntWithOverload(string a)
    {
        return a.Length;
    }

    public static Vector3 Vector3ArgAndReturnVector3(Vector3 v)
    {
        return v;
    }
    public static Vector3 Vector3ArgAndReturnVector3WithOverload(Vector3 a)
    {
        return a;
    }
    public static Vector3 Vector3ArgAndReturnVector3WithOverload(Vector2 a)
    {
        return new Vector3(a.x, a.y, 1);
    }

    // Start is called before the first frame update
    void Start()
    {
        Puerts.JsEnv env = new Puerts.JsEnv();

        double sb = env.Eval<double>(@"
            const T = CS.Scripts;
            let start

            for (let i = 0; i < 100; i++) {
                T.IntArgAndReturnInt(3);
            }
            start = Date.now();
            for (let i = 0; i < 1000000; i++) {
                T.IntArgAndReturnInt(3);
            }
            console.log(`1000000 Int Arg used: ${Date.now() - start}ms`);
            
            for (let i = 0; i < 100; i++) {
                T.IntArgAndReturnIntWithOverload(3);
            }
            start = Date.now();
            for (let i = 0; i < 1000000; i++) {
                T.IntArgAndReturnIntWithOverload(3);
            }
            console.log(`1000000 Int Arg withOverload used: ${Date.now() - start}ms`);
            
            const vec = new CS.UnityEngine.Vector3();
            for (let i = 0; i < 100; i++) {
                T.Vector3ArgAndReturnVector3(vec);
            }
            start = Date.now();
            for (let i = 0; i < 1000000; i++) {
                T.Vector3ArgAndReturnVector3(vec);
            }
            console.log(`1000000 Vec3 Arg used: ${Date.now() - start}ms`);
            
            for (let i = 0; i < 100; i++) {
                T.Vector3ArgAndReturnVector3WithOverload(vec);
            }
            start = Date.now();
            for (let i = 0; i < 1000000; i++) {
                T.Vector3ArgAndReturnVector3WithOverload(vec);
            }
            console.log(`1000000 Vec3 Arg withOverload used: ${Date.now() - start}ms`);
        ");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
