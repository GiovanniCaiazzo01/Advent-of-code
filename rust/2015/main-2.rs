use std::fs;

fn main() {
    let file_path = "./input.txt";
    let content = fs::read_to_string(file_path).expect("Should read the content inside the file");

    let mut counter = 0;

    for (index, character) in content.char_indices() {
        if counter == -1 {
            println!("result: {}", index);
            break;
        }

        if character == '(' {
            counter += 1;
            continue;
        }
        counter -= 1;
    }
}
