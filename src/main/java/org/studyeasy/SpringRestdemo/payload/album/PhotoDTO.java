package org.studyeasy.SpringRestdemo.payload.album;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PhotoDTO {

    
    private long id;

    private String name;

    private String desciption;

    private String fileName;

    private String download_link;

    
}
