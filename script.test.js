function combineStringsAndRemoveZ(arr) {
    return arr.join('').replace(/z/g, '');
    }
    
    describe('combineStringsAndRemoveZ', () => {
    test('should combine strings and remove all "z" characters', () => {
    const arr = ['hello', 'world', 'zoo'];
    const result = combineStringsAndRemoveZ(arr);
    expect(result).toEqual('helloworldoo');
    });
    
    
    test('should return an empty string if all input strings contain only "z" characters', () => {
    const arr = ['zz', 'zzz', 'zzzz'];
    const result = combineStringsAndRemoveZ(arr);
    expect(result).toEqual('');
    });
    });
    
    function combineStringsAndRemoveZ(arr) {
        return arr.join('').replace(/z/g, '');
        }
        
        describe('combineStringsAndRemoveZ', () => {
        test('should combine strings and remove all "z" characters', () => {
        const arr = ['hello', 'world', 'zoo'];
        const result = combineStringsAndRemoveZ(arr);
        expect(result).toEqual('helloworldoo');
        });
        
        test('should return an empty string if all input strings contain only "z" characters', () => {
        const arr = ['zz', 'zzz', 'zzzz'];
        const result = combineStringsAndRemoveZ(arr);
        expect(result).toEqual('');
        });
        });

        test('should combine strings and remove all "z" characters, including duplicates', () => {
            const arr = ['onez', 'zebra', 'is', 'zesty'];
            const result = combineStringsAndRemoveZ(arr);
            expect(result).toEqual('oneebraisesty');
            });
            
        
        
        
        
    
    
    