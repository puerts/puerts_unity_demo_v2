using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scripts : MonoBehaviour
{
    public static int IntArgAndReturnInt(int a, int b = 3)
    {
        return a;
    }

    // Start is called before the first frame update
    void Start()
    {
        Puerts.JsEnv env = new Puerts.JsEnv();

        double sb = env.Eval<double>(@"
            const T = CS.Scripts;
            for (let i = 0; i < 100; i++) {
                T.IntArgAndReturnInt(3);
            }
            const start = Date.now();
            for (let i = 0; i < 10000000; i++) {
                T.IntArgAndReturnInt(3);
            }
            Date.now() - start;
        ");
        UnityEngine.Debug.Log("10000000 Int Arg used: " + sb + "ms");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
